/* Start of import */
import React from 'react';

// Imports all the svg data from a file.
import svgs from './svgs';
const { github, linkedin, hackerrank, instagram, twitter, youtube, facebook, externallink, doc, star, fork } = svgs;
/* End of import */

const GitHub = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={github} urlToUse={urlToUse} />
	)
}

const LinkedIn = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={linkedin} urlToUse={urlToUse} />
	)
}

const HackerRank = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={hackerrank} urlToUse={urlToUse} />
	)
}

const Instagram = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={instagram} urlToUse={urlToUse} />
	)
}

const Twitter = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={twitter} urlToUse={urlToUse} />
	)
}

const Youtube = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={youtube} urlToUse={urlToUse} />
	)
}

const Facebook = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={facebook} urlToUse={urlToUse} />
	)
}

const ExternalLinkSymbol = ({ urlToUse }) => {
	return (
		<LogoLink logoObj={externallink} urlToUse={urlToUse} />
	)
}

const Doc = ({ urlToUse }) => {
	return (
		<Logo logoObj={doc} urlToUse={urlToUse} onlyLogo={true} />
	)
}

const Star = ({ urlToUse }) => {
	return (
		<Logo logoObj={star} urlToUse={urlToUse} onlyLogo={true} />
	)
}

const Fork = ({ urlToUse }) => {
	return (
		<Logo logoObj={fork} urlToUse={urlToUse} onlyLogo={true} />
	)
}

/* A circle as the logo background. */
const Circle = () => {
	return (
		<circle style={{fill: "#eee"}} cx="100" cy="100" r="80"></circle>
	)
}

/* A square as the logo background. */
const Square = () => {
	return (
		<rect style={{fill: "#eee"}} x="0" y="0" rx="25" ry="25" width="200" height="200"></rect>
	)
}

/* Logo component with the SVG image. */
const Logo = ({ logoObj, onlyLogo=false }) => {
	const { own_width="", own_height, view_box, paths } = logoObj;
	return (
		<div style={own_width ? {width: own_width, height: own_height} : {width: "2.5rem"}}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={view_box}>
				{/* If requires only the logo, we don't include the square/circle background. A component is always true, so <Square /> gets returned below. */}
				{/* Start of Task 5 */}
				{!onlyLogo && <Square />}
				{/* End of Task 5 */}
				{paths.map((path, ind) => (
					<path key={ind} fill="#000" className="bg-black" d={path}></path>
				))}
			</svg>
		</div>
	)
}

/* Logo component wrapped with an a tag to a URL. */
const LogoLink = ({ logoObj, urlToUse = "" }) => {
	const { url } = logoObj;
	return (
		// Use "urlToUse" if specified, else use "url".
		// "noopener noreferrer" prevents cross site attacks. noopener prevents opened page to have control of this page. noreferrer does not pass user information to the opened page.
		// target blank means open in a new tab.
		<a href={urlToUse || url} rel="noopener noreferrer" target="_blank" className="dim no-underline">
			<Logo logoObj={logoObj} />
		</a>
	)
}

export {
	LinkedIn,
	Facebook,
	HackerRank,
	Instagram,
	Twitter,
	Youtube,
	GitHub,
	ExternalLinkSymbol,
	Doc,
	Star,
	Fork
}