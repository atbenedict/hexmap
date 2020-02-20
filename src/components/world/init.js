import uuid from "react-uuid";

export default function initWorld(columns = 16) {
  let world = [];
  let worldRow = [];
  let loc = {};
  for (let row = 0; row < columns; row++) {
    for (let col = 0; col < columns; col++) {
      loc = {};
      loc = {
        id: uuid(),
        x: col,
        y: row,
        terrain: "none",
        nw: "none",
        ne: "none",
        e: "none",
        se: "none",
        sw: "none",
        w: "none"
      };
      worldRow.push(loc);
    }
    world.push(worldRow);
    worldRow = [];
  }
  //create connections now
  for (let row = 0; row < world.length; row++) {
    for (let col = 0; col < world[row].length; col++) {
      // OUTSIDE CASES
      // Row 0 has no 'ne' or 'nw'
      // Row (world.length -1) has no 'se' or 'sw'
      // Column 0 has no 'w'
      // Column (world[row].length -1) has no 'e'
      // EVEN ROWS (including 0)
      if (row > 0) {
        world[row][col].ne = "none";
        world[row][col].nw = "none";
      }
    }
  }
  return world;
}
