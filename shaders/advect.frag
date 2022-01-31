uniform float uDelta;
uniform float uDiffusion;

out vec4 fragColor;
void main()
{

    //storage de la resolution normalisé du deuxième input
    vec2 size = uTD2DInfos[1].res.xy;

    //calcul des coordinates
    vec2 coord = vUV.xy - uDelta * texture(sTD2DInputs[1], vUV.xy).xy * size;

    //utilisation des coordonates pour lire les données du premier input
    vec4 result = texture(sTD2DInputs[0], coord);

    //decay factor
    float decay = 1.0 + uDiffusion * uDelta;

    //output color 
	vec4 color = result / decay;
	fragColor = TDOutputSwizzle(color);
}
