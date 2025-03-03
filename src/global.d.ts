declare module '*.module.css' {
  const classNames: { readonly [key: string]: string };
	export default classNames;
}

declare module '*.png' {
	const url: URL['href'];
	export default url;
}
