/*
 * Demonstrates how to create a grid rawing function
 */


//
//  Basic something to draw, by default a rectangle
//
class DrawableObject {

  float x, y;
  float w=10, h=10; //arbitrary values so we see something when this is drawn

  public void draw()
  {
    rectMode(CORNER);
    rect(x, y, w, h);
  }
}



// number of cells/objects to store in our array and draw
int OBJECTS_TO_DRAW = 14;

// grid properties
int COLS = 2;
// NOTE: rows will be calculated based on number of cols


// list of objects in our grid to draw
DrawableObject[] gridObjects = new DrawableObject[OBJECTS_TO_DRAW];

// 
// SETUP ----------------------------------------------------------
//
void setup()
{
  size(512, 256);

  setupGridPositions(gridObjects, COLS);
}



// 
// SETUP ----------------------------------------------------------
//

color f = 0;

void draw()
{
  if (frameCount % 60 == 0) f = color(random(255), random(255), random(255));

  // draw our cells
  for (int cell=0; cell < gridObjects.length; cell++)
  {  
    // let's say that cell 6 (row 2 col 3) is always purple
    if ( cell == 6 ) {
      fill(255,0,255);
    }
    else 
    {
      fill(f);
    }

    gridObjects[cell].draw();
  }

  //fill(f);
  //drawGridAt(mouseX, mouseY, gridObjects);
}


//----------------------------------------------------------------------
// update an array of grid cells based on the number of columns provided
//
void setupGridPositions( DrawableObject[] gridObjects, final int columns ) 
{
  int COL_WIDTH = width/columns; // setup width of columns
  final int NUM_ROWS = gridObjects.length/columns;
  int ROW_HEIGHT = height/NUM_ROWS;

  // position our cells in a 4x3 (4 col x 3 row) grid
  for (int cell=0; cell < gridObjects.length; cell++)
  {
    // figure out column & row for this cell 

    // wrap around the number of elements per column
    int col = cell % COLS;

    // we want the smallest whole number that this index divides into to
    // get the row
    int row = cell/COLS;

    //print("col=" + col);
    //println(", row=" + row);

    // create new cell object and put in array
    DrawableObject cellObject = new DrawableObject();
    // set the cell's position based on row/col
    cellObject.x = COL_WIDTH*col;
    cellObject.y = ROW_HEIGHT*row;

    cellObject.w = COL_WIDTH;
    cellObject.h = ROW_HEIGHT;

    gridObjects[cell] = cellObject; // put it in the array
    //    println("x="+gridObjects[cell].x);
  }
}


//----------------------------------------------------------------------
// draw the grid at a specific position
// quite useless, but fun
//
void drawGridAt(int x, int y, DrawableObject[] gridObjects)
{
  pushMatrix();
  translate(x, y);
  // draw our cells
  for (int cell=0; cell < gridObjects.length; cell++)
  {  
    gridObjects[cell].draw();
  }
  popMatrix();
}