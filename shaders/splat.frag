uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
uniform float uAspectRatio;

out vec4 fragColor;
void main()
{
	// coordinates du delta du current UV et du point
	vec2 p = vUV.xy - uPoint;
	
	// prise du aspect ratio en considération
	p.x *= uAspectRatio;

	// définition du splat, (définition d'un cercle qui fade-out de facon exponentiel vers les edges)
	vec3 splat = exp(-dot(p, p) / uRadius) * uColor;

	// imput color
	vec3 base = texture(sTD2DInputs[0], vUV.st).xyz;

	vec4 color = vec4(base + splat, 1.0);
	fragColor = TDOutputSwizzle(color);
}
