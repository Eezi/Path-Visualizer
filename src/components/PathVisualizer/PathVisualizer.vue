<template>
  <div>
    <div class="buttons">
      <button class="btn" @click="createMaze(grid)">
        Generate Maze
      </button>
      <button class="visualize" @click="this.dijkstran">Visualize</button>
      <button class="btn" @click="resetWholeGrid">Reset Grid</button>
    </div>
    <div class="container">
      <div class="rows" v-for="row in grid" :key="row.col">
        <Node
          v-for="col in row"
          :key="col.col"
          :col="col.col"
          :row="col.row"
          :distance="col.distance"
          :isFinish="col.isFinish"
          :isStart="col.isStart"
          :isWall="col.isWall"
          :previousNode="col.previousNode"
          :mousePressed="mousePressed"
          :handleMouseDown="handleMouseDown"
          :handleMouseup="handleMouseUp"
          :handleMouseEnter="handleMouseEnter"
          :handleWallOff="handleWallOff"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Node from "./Node/Node.vue";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../Algorithm/Dijkstra";
import { createMaze } from "../../Algorithm/MazeAlgorithm";
export default {
  data() {
    return {
      grid: {},
      start_node_row: 8,
      start_node_column: 6,
      finish_node_row: 8,
      finish_node_column: 40,
      mousePressed: false,
    };
  },
  methods: {
    getInitialGrid() {
      const gridi = [];
      for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 47; col++) {
          currentRow.push(this.createNode(col, row));
        }
        gridi.push(currentRow);
      }

      return gridi;
    },
    dijkstran() {
      const startNode = this.grid[this.start_node_row][this.start_node_column];
      const finishNode = this.grid[this.finish_node_row][
        this.finish_node_column
      ];
      const visitedNodesInOrder = dijkstra(this.grid, startNode, finishNode);
      const shortestPathOrder = getNodesInShortestPathOrder(finishNode);
      this.animateDijkstra(visitedNodesInOrder, shortestPathOrder);
    },

    animateDijkstra(visitedNodesInOrder, shortestPathOrder) {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            this.animateShortestPath(shortestPathOrder);
          }, 10 * i);
        }
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          if (node) {
            document.getElementById(`node,${node.row},${node.col}`).className =
              "node node-visited";
          }
        }, 10 * i);
      }
    },

    animateShortestPath(visitedNodesInOrder) {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          if (node) {
            document.getElementById(`node,${node.row},${node.col}`).className =
              "node node-shortest-path";
          }
        }, 50 * i);
      }
    },

    getNewGridWithWalls(grid, row, col, wallOff) {
      const newGrid = grid.slice();
      const node = newGrid[row][col];

      if (wallOff) {
        const newNode = {
          ...node,
          isWall: false,
        };

        newGrid[row][col] = newNode;
        return newGrid;
      } else {
        const newNode = {
          ...node,
          isWall: !this.isWall,
        };

        newGrid[row][col] = newNode;

        return newGrid;
      }
    },

    handleMouseDown(row, col) {
      const newGrid = this.getNewGridWithWalls(this.grid, row, col);
      this.grid = newGrid;
      this.mousePressed = true;
    },

    handleMouseEnter(row, col) {
      if (this.mousePressed) {
        const newGrid = this.getNewGridWithWalls(this.grid, row, col);
        this.grid = newGrid;
      }
    },

    handleMouseUp() {
      this.mousePressed = false;
    },

    handleWallOff(row, col) {
      const wallOff = true;
      const newGrid = this.getNewGridWithWalls(this.grid, row, col, wallOff);
      this.grid = newGrid;
    },

    createNode(col, row) {
      return {
        col,
        row,
        isStart: col == this.start_node_column && row == this.start_node_row,
        isFinish: col == this.finish_node_column && row == this.finish_node_row,
        isWall: false,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
      };
    },
    resetWholeGrid() {
      this.grid = this.getInitialGrid();
      this.grid.map((row) => {
      row.map((node) => {
        document.getElementById(`node,${node.row},${node.col}`).className =
          "node";
      });
    });
    },
    createMaze
  },

  mounted() {
    this.grid = this.getInitialGrid();
    
  },

  components: {
    Node,
  },
};
</script>

<style scoped>
button {
  border-radius: 5%;
  padding: 1em;

  margin-right: 1rem;
}
button:hover {
  cursor: pointer;
}
button:focus {
  outline: 0;
}

.visualize {
  background-color: #42b983;
  color: #fff;
  border: 1px solid #42b983;
}

.btn {
  background-color: transparent;
  color: #42b983;
  border: 1px solid #42b983;
}

.btn:hover {
  color: #fff;
  background-color: #42b983;
}

.rows {
  display: flex;
}

.buttons {
  display: flex;
  justify-content: center;
}
</style>
