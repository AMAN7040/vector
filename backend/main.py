from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI();

#Cors enabled
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/pipelines/parse")

async def parse_pipeline(request: Request):
    body = await request.json()
    nodes = body.get("nodes", [])
    edges = body.get("edges", [])

    #Directed graph build
    G = nx.DiGraph()
    for node in nodes:
        G.add_node(node["id"])
    
    for edge in edges:
        G.add_edge(edge["source"], edge["target"])

    
    #check for cycles
    is_DAG = nx.is_directed_acyclic_graph(G)

    return {
        "total_nodes" : len(nodes),
        "total_edges" : len(edges),
        "is_DAG" : is_DAG,
    }