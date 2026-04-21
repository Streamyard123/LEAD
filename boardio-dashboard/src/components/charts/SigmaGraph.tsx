"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Graph from "graphology";
import Sigma from "sigma";
import { circular } from "graphology-layout";
import forceAtlas2 from "graphology-layout-forceatlas2";
import louvain from "graphology-communities-louvain";
import { Search, ZoomIn, ZoomOut, Maximize2, Play, Pause, RotateCcw, Layers } from "lucide-react";

// Community color palette matching our theme
const COMMUNITY_COLORS = [
  "#c9a87c", "#1c1917", "#78716c", "#b08d5f", "#44403c",
  "#a8a29e", "#d6d3d1", "#292524", "#e8c9a0", "#8b6914",
];

interface GraphNode {
  id: string;
  label: string;
  group?: string;
  size?: number;
}

interface GraphEdge {
  source: string;
  target: string;
  weight?: number;
  label?: string;
}

interface SigmaGraphProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export default function SigmaGraph({ nodes, edges }: SigmaGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sigmaRef = useRef<Sigma | null>(null);
  const graphRef = useRef<Graph | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isLayoutRunning, setIsLayoutRunning] = useState(false);
  const [showCommunities, setShowCommunities] = useState(true);
  const [nodeInfo, setNodeInfo] = useState<{
    label: string;
    degree: number;
    community: number;
    neighbors: string[];
  } | null>(null);

  const layoutIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const draggedNodeRef = useRef<string | null>(null);
  const isDraggingRef = useRef(false);

  // Build graph and initialize Sigma
  useEffect(() => {
    if (!containerRef.current) return;

    const graph = new Graph();
    graphRef.current = graph;

    // Add nodes
    nodes.forEach((node) => {
      graph.addNode(node.id, {
        label: node.label,
        size: node.size || 10,
        group: node.group || "default",
        x: 0,
        y: 0,
      });
    });

    // Add edges
    edges.forEach((edge, i) => {
      if (graph.hasNode(edge.source) && graph.hasNode(edge.target)) {
        const key = `e${i}`;
        if (!graph.hasEdge(edge.source, edge.target)) {
          graph.addEdge(edge.source, edge.target, {
            weight: edge.weight || 1,
            label: edge.label || "",
            size: Math.max(1, (edge.weight || 1) / 2),
          });
        }
      }
    });

    // Initial circular layout
    circular.assign(graph);

    // Run community detection
    try {
      louvain.assign(graph);
    } catch {
      // If louvain fails, assign default communities
      graph.forEachNode((node) => {
        graph.setNodeAttribute(node, "community", 0);
      });
    }

    // Apply community colors
    graph.forEachNode((node) => {
      const community = graph.getNodeAttribute(node, "community") || 0;
      graph.setNodeAttribute(node, "color", COMMUNITY_COLORS[community % COMMUNITY_COLORS.length]);
      // Scale node size by degree
      const degree = graph.degree(node);
      graph.setNodeAttribute(node, "size", Math.max(6, Math.min(25, 6 + degree * 2)));
    });

    // Run ForceAtlas2 for initial layout
    forceAtlas2.assign(graph, {
      iterations: 100,
      settings: {
        gravity: 1,
        scalingRatio: 10,
        barnesHutOptimize: true,
        strongGravityMode: false,
        slowDown: 5,
      },
    });

    // Create Sigma instance
    const sigma = new Sigma(graph, containerRef.current, {
      renderEdgeLabels: false,
      enableEdgeEvents: true,
      defaultEdgeColor: "#e7e5e4",
      defaultNodeColor: "#c9a87c",
      labelFont: "Inter, system-ui, sans-serif",
      labelSize: 12,
      labelColor: { color: "#1c1917" },
      labelWeight: "500",
      edgeLabelFont: "Inter, system-ui, sans-serif",
      edgeLabelSize: 10,
      stagePadding: 30,
      nodeReducer(node, data) {
        const res = { ...data };

        // Search highlighting
        if (searchQuery && !data.label?.toLowerCase().includes(searchQuery.toLowerCase())) {
          res.color = "#e7e5e4";
          res.label = "";
        }

        // Hover/selection highlighting
        if (hoveredNode) {
          if (node === hoveredNode || graph.hasEdge(node, hoveredNode) || graph.hasEdge(hoveredNode, node)) {
            res.highlighted = true;
          } else {
            res.color = `${res.color}40`;
            res.label = "";
          }
        }

        if (selectedNode) {
          if (node === selectedNode) {
            res.highlighted = true;
            res.color = "#c9a87c";
          } else if (graph.hasEdge(node, selectedNode) || graph.hasEdge(selectedNode, node)) {
            res.highlighted = true;
          } else {
            res.color = `${res.color}30`;
            res.label = "";
          }
        }

        if (!showCommunities) {
          res.color = "#c9a87c";
        }

        return res;
      },
      edgeReducer(edge, data) {
        const res = { ...data };

        if (hoveredNode) {
          const source = graph.source(edge);
          const target = graph.target(edge);
          if (source !== hoveredNode && target !== hoveredNode) {
            res.hidden = true;
          } else {
            res.color = "#c9a87c";
            res.size = 2;
          }
        }

        if (selectedNode) {
          const source = graph.source(edge);
          const target = graph.target(edge);
          if (source !== selectedNode && target !== selectedNode) {
            res.hidden = true;
          } else {
            res.color = "#c9a87c";
            res.size = 2;
          }
        }

        return res;
      },
    });

    sigmaRef.current = sigma;

    // ── Drag functionality ──
    sigma.on("downNode", (e) => {
      draggedNodeRef.current = e.node;
      isDraggingRef.current = false;
      sigma.getCamera().disable();
    });

    sigma.getMouseCaptor().on("mousemovebody", (e) => {
      if (!draggedNodeRef.current) return;
      isDraggingRef.current = true;

      const pos = sigma.viewportToGraph(e);
      graph.setNodeAttribute(draggedNodeRef.current, "x", pos.x);
      graph.setNodeAttribute(draggedNodeRef.current, "y", pos.y);
    });

    sigma.getMouseCaptor().on("mouseup", () => {
      if (draggedNodeRef.current) {
        draggedNodeRef.current = null;
        sigma.getCamera().enable();
      }
    });

    // ── Hover events ──
    sigma.on("enterNode", (e) => {
      setHoveredNode(e.node);
      containerRef.current!.style.cursor = "grab";
    });

    sigma.on("leaveNode", () => {
      setHoveredNode(null);
      containerRef.current!.style.cursor = "default";
    });

    // ── Click events ──
    sigma.on("clickNode", (e) => {
      if (isDraggingRef.current) return;
      const nodeId = e.node;
      setSelectedNode((prev) => (prev === nodeId ? null : nodeId));

      // Get node info
      const label = graph.getNodeAttribute(nodeId, "label");
      const degree = graph.degree(nodeId);
      const community = graph.getNodeAttribute(nodeId, "community");
      const neighbors = graph.neighbors(nodeId).map((n) => graph.getNodeAttribute(n, "label"));
      setNodeInfo({ label, degree, community, neighbors });
    });

    sigma.on("clickStage", () => {
      setSelectedNode(null);
      setNodeInfo(null);
    });

    return () => {
      if (layoutIntervalRef.current) clearInterval(layoutIntervalRef.current);
      sigma.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, edges]);

  // Re-render on state changes
  useEffect(() => {
    sigmaRef.current?.refresh();
  }, [hoveredNode, selectedNode, searchQuery, showCommunities]);

  // ForceAtlas2 live layout toggle
  const toggleLayout = useCallback(() => {
    if (!graphRef.current) return;

    if (isLayoutRunning) {
      if (layoutIntervalRef.current) {
        clearInterval(layoutIntervalRef.current);
        layoutIntervalRef.current = null;
      }
      setIsLayoutRunning(false);
    } else {
      setIsLayoutRunning(true);
      layoutIntervalRef.current = setInterval(() => {
        if (graphRef.current) {
          forceAtlas2.assign(graphRef.current, {
            iterations: 1,
            settings: {
              gravity: 1,
              scalingRatio: 10,
              barnesHutOptimize: true,
              slowDown: 10,
            },
          });
          sigmaRef.current?.refresh();
        }
      }, 50);
    }
  }, [isLayoutRunning]);

  // Zoom controls
  const zoomIn = () => {
    const camera = sigmaRef.current?.getCamera();
    if (camera) camera.animatedZoom({ duration: 300 });
  };

  const zoomOut = () => {
    const camera = sigmaRef.current?.getCamera();
    if (camera) camera.animatedUnzoom({ duration: 300 });
  };

  const resetCamera = () => {
    const camera = sigmaRef.current?.getCamera();
    if (camera) camera.animatedReset({ duration: 300 });
  };

  return (
    <div className="relative w-full h-full">
      {/* Graph container */}
      <div ref={containerRef} className="w-full h-full rounded-sm" />

      {/* Controls overlay - top left */}
      <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search nodes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 pr-3 py-1.5 text-xs bg-white/90 backdrop-blur-sm border border-border rounded-sm focus:outline-none focus:border-accent w-44 shadow-sm"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-1">
          <button
            onClick={zoomIn}
            className="p-1.5 bg-white/90 backdrop-blur-sm border border-border rounded-sm hover:border-accent transition-colors shadow-sm"
            title="Zoom in"
          >
            <ZoomIn size={14} className="text-primary" />
          </button>
          <button
            onClick={zoomOut}
            className="p-1.5 bg-white/90 backdrop-blur-sm border border-border rounded-sm hover:border-accent transition-colors shadow-sm"
            title="Zoom out"
          >
            <ZoomOut size={14} className="text-primary" />
          </button>
          <button
            onClick={resetCamera}
            className="p-1.5 bg-white/90 backdrop-blur-sm border border-border rounded-sm hover:border-accent transition-colors shadow-sm"
            title="Reset view"
          >
            <Maximize2 size={14} className="text-primary" />
          </button>
          <button
            onClick={toggleLayout}
            className={`p-1.5 backdrop-blur-sm border rounded-sm transition-colors shadow-sm ${
              isLayoutRunning
                ? "bg-accent/20 border-accent text-accent-dark"
                : "bg-white/90 border-border hover:border-accent text-primary"
            }`}
            title={isLayoutRunning ? "Pause layout" : "Run ForceAtlas2"}
          >
            {isLayoutRunning ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={() => {
              if (!graphRef.current) return;
              circular.assign(graphRef.current);
              forceAtlas2.assign(graphRef.current, {
                iterations: 100,
                settings: { gravity: 1, scalingRatio: 10, barnesHutOptimize: true, slowDown: 5 },
              });
              sigmaRef.current?.refresh();
            }}
            className="p-1.5 bg-white/90 backdrop-blur-sm border border-border rounded-sm hover:border-accent transition-colors shadow-sm"
            title="Reset layout"
          >
            <RotateCcw size={14} className="text-primary" />
          </button>
          <button
            onClick={() => setShowCommunities((prev) => !prev)}
            className={`p-1.5 backdrop-blur-sm border rounded-sm transition-colors shadow-sm ${
              showCommunities
                ? "bg-accent/20 border-accent text-accent-dark"
                : "bg-white/90 border-border hover:border-accent text-primary"
            }`}
            title={showCommunities ? "Hide communities" : "Show communities"}
          >
            <Layers size={14} />
          </button>
        </div>
      </div>

      {/* Node info panel - bottom left */}
      {nodeInfo && (
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-border rounded-sm p-3 shadow-lg z-10 max-w-[220px]">
          <h4 className="text-sm font-medium text-primary mb-1.5">{nodeInfo.label}</h4>
          <div className="space-y-1 text-[11px] text-muted">
            <p>
              <span className="text-primary font-medium">Degree:</span> {nodeInfo.degree}
            </p>
            <p>
              <span className="text-primary font-medium">Community:</span>{" "}
              <span
                className="inline-block w-2.5 h-2.5 rounded-full mr-1 align-middle"
                style={{ backgroundColor: COMMUNITY_COLORS[nodeInfo.community % COMMUNITY_COLORS.length] }}
              />
              Cluster {nodeInfo.community}
            </p>
            <p>
              <span className="text-primary font-medium">Neighbors:</span>{" "}
              {nodeInfo.neighbors.length > 0 ? nodeInfo.neighbors.join(", ") : "None"}
            </p>
          </div>
        </div>
      )}

      {/* Stats overlay - top right */}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-border rounded-sm p-2.5 shadow-sm z-10 text-[10px] text-muted space-y-0.5">
        <p><span className="text-primary font-medium">{nodes.length}</span> nodes</p>
        <p><span className="text-primary font-medium">{edges.length}</span> edges</p>
        <p className="text-[9px] mt-1 text-muted/60">Drag nodes to move</p>
        <p className="text-[9px] text-muted/60">Click to inspect</p>
      </div>
    </div>
  );
}
