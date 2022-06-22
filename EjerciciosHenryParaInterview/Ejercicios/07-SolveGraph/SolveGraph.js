function SolveGraph(graph, start, end, visited = {}) {
  // Your code here:
  // nos fijamos si ya visitamos este vértice
  if (visited[start]) return false;
  // lo agregamos a los visitados
  visited[start] = true;
  // iteramos sobre el arreglo de vértices
  for (let i = 0; i < graph[start].length; i += 1) {
      // Si encontramos el target devolvemos true
      if (end === graph[start][i]) return true;
      // si no llamamos recursivamente a la función para ver si sus aristas están conectadas
      else if (SolveGraph(graph, graph[start][i], end, visited)) return true
}
// si no devolvemos false
return false;
}

module.exports = SolveGraph;
