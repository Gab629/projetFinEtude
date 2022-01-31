uniform float uDelta;
uniform float uVorticity;

#include "glsl_includes"

out vec4 fragColor;
void main()
{
    //permet la lecture des valeurs des 4 pixels adjacent
    float L = texture(sTD2DInputs[1], pL).x;    
    float R = texture(sTD2DInputs[1], pR).x;
    float T = texture(sTD2DInputs[1], pT).x;    
    float B = texture(sTD2DInputs[1], pB).x;
    //UV coordinates actuelles
    float C = texture(sTD2DInputs[1], vUV.xy).x;

    //calculation de la force
    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));

    //normalisation de la force
    force /= length(force) + 0.0001;
    force *= uVorticity * C;
    force.y *= -1.0;

    //lecture à partir du input de la velocity
    vec2 vel = texture(sTD2DInputs[0], vUV.xy).xy;

    //output color 
	vec4 color = vec4(vel + force * uDelta, 0.0, 1.0);
	fragColor = TDOutputSwizzle(color);
}
