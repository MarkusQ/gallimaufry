// ------ Camera settings.
set translation [-2.47318 -3.44452 -20]
set rotation [0.910346 -0.396398 0.118906 -0.0837121 0.105 0.990941 -0.405293 -0.912053 0.0624024]
set pivot [0 0 0]
set scale 0.166555

// ------ The actual EisenScript
set background #060
set maxdepth 400
#define n 40

{ sat 0 } r0

rule r0 {
  yz-face-t  { x -3 x n  } yz-face-t
  xz-face-t  { y -3 y n  } xz-face-t
  xy-face-t  { z -3 z n  } xy-face-t
}

rule yz-face-t {
  yz-face
  3 * { x 0.7 } yz-face
}

rule xz-face-t {
  xz-face
  3 * { y 0.7 } xz-face
}
rule xy-face-t {
  xy-face
  3 * { z 0.7 } xy-face
}
rule xy-face { y-row n * { x 1  } y-row }
rule xz-face { z-row n * { x 1  } z-row }
rule yz-face { z-row n * { y 1  } z-row }

rule y-row {  sp n * { y 1 } sp }
rule x-row {  sp n * { x 1 } sp }
rule z-row {  sp n * { z 1 } sp }

rule sp { sphere }
rule sp { { x 0.1 } sp }
rule sp { { y 0.1 } sp }
rule sp { { z 0.1 } sp }

// ----- Settings for internal raytracer

set raytracer::shadows true

// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 6

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
//set raytracer::dof [0.23,0.07]

// Set materials either globally,
// or for a selected tag (e.g. 'shiny')
set raytracer::phong [0.5,0.6,0.2]
 