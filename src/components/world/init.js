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
      //IF ZERO ROW
      if (row === 0) {
        //EVERY ROW ZERO CELL HAS A SE CONNECTION
        world[row][col].se = world[row + 1][col];
        if (col === 0) {
          //DO FIRST COL ZERO ROW STUFF
          world[row][col].e = world[row][col + 1];
        } else if (col === world[row].length - 1) {
          //DO LAST COL ZERO ROW STUFF
          world[row][col].w = world[row][col - 1];
          world[row][col].sw = world[row + 1][col - 1];
        } else {
          //DO ZERO ROW STUFF
          world[row][col].e = world[row][col + 1];
          world[row][col].w = world[row][col - 1];
          world[row][col].sw = world[row + 1][col - 1];
        }
      }
      //FOR EVEN ROWS
      else if ((row + 1) % 2) {
        //IF EVEN LAST ROW
        if (row === world.length - 1) {
          //EVERY EVEN LAST ROW HAS A NE CONNECTION
          world[row][col].ne = world[row - 1][col];
          if (col === 0) {
            //DO FIRST COL EVEN LAST ROW STUFF
            world[row][col].e = world[row][col + 1];
          } else if (col === world[row].length - 1) {
            //DO LAST COL EVEN LAST ROW STUFF
            world[row][col].w = world[row][col - 1];
            world[row][col].nw = world[row - 1][col - 1];
          } else {
            //DO EVEN LAST ROW STUFF
            world[row][col].e = world[row][col + 1];
            world[row][col].w = world[row][col - 1];
            world[row][col].nw = world[row - 1][col - 1];
          }
        } else {
          //DO REGULAR EVEN ROW STUFF
          world[row][col].e = world[row][col + 1];
          world[row][col].w = world[row][col - 1];
          world[row][col].ne = world[row - 1][col];
          world[row][col].nw = world[row - 1][col - 1];
          world[row][col].se = world[row + 1][col];
          world[row][col].sw = world[row + 1][col - 1];
        }
      }
      //FOR ODD ROWS
      else if (row % 2) {
        //IF LAST ROW
        if (row === world.length - 1) {
          //EVERY ODD LAST ROW HAS A NW CONNECTION
          world[row][col].nw = world[row - 1][col];
          if (col === 0) {
            //DO FIRST COL ODD LAST ROW STUFF
            world[row][col].e = world[row][col + 1];
            world[row][col].ne = world[row - 1][col + 1];
          } else if (col === world[row].length - 1) {
            //DO LAST COL ODD LAST ROW STUFF
            world[row][col].w = world[row][col - 1];
          } else {
            //DO ODD LAST ROW STUFF
            world[row][col].e = world[row][col + 1];
            world[row][col].w = world[row][col - 1];
            world[row][col].ne = world[row - 1][col + 1];
          }
        } else {
          //DO REGULAR ODD ROW STUFF
          world[row][col].e = world[row][col + 1];
          world[row][col].w = world[row][col - 1];
          world[row][col].ne = world[row - 1][col + 1];
          world[row][col].nw = world[row - 1][col];
          world[row][col].se = world[row + 1][col + 1];
          world[row][col].sw = world[row + 1][col];
        }
      }
    }
  }
  return world;
}
