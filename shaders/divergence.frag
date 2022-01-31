#include "glsl_includes"

out vec4 fragColor;
void main()
{
    //permet la lecture des valeurs des 4 pixels adjacent
    float L = texture(sTD2DInputs[0], pL).x;    
    float R = texture(sTD2DInputs[0], pR).x;
    float T = texture(sTD2DInputs[0], pT).y;    
    float B = texture(sTD2DInputs[0], pB).y;

    //UV coordinates actuelles
    vec2 C = texture(sTD2DInputs[0], vUV.xy).xy;

    //Rester dans les limites
    if (pL.x < 0.0) { L = -C.x; }
    if (pR.x > 1.0) { R = -C.x; }
    if (pT.y > 1.0) { T = -C.y; }
    if (pB.y < 0.0) { B = -C.y; }

    //calcule de la divergence
    float divergence = 0.5 * (R - L + T - B);

    //output color 
	vec4 color = vec4(divergence, 0.0, 0.0, 1.0);
	fragColor = TDOutputSwizzle(color);
}
