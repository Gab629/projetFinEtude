﻿#include "glsl_includes"

out vec4 fragColor;
void main()
{
    //permet la lecture des valeurs des 4 pixels adjacent
    float L = texture(sTD2DInputs[0], pL).x;    
    float R = texture(sTD2DInputs[0], pR).x;
    float T = texture(sTD2DInputs[0], pT).x;    
    float B = texture(sTD2DInputs[0], pB).x;

    //UV coordinates actuelles
    float C = texture(sTD2DInputs[0], vUV.xy).x;

    float divergence = texture(sTD2DInputs[1], vUV.xy).x;

    //calcul de la pression
    float pressure = (L + R + B + T - divergence) * 0.25;

    //output color 
	vec4 color = vec4(pressure, 0.0, 0.0, 1.0);
	fragColor = TDOutputSwizzle(color);
}
