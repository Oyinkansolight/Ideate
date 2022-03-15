module.exports = {
	siteMetadata: {
		siteUrl: `https://www.ide8.zone/`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-postcss",
		"gatsby-plugin-root-import",
		// {
		//   resolve: 'gatsby-plugin-google-analytics',
		//   options: {
		//     "trackingId": ""
		//   }
		// },
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/logo.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
	],
};
