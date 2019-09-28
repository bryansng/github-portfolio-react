/* Start of import */
import React, { Component } from 'react';
import styled from 'styled-components';
import { GitHub, ExternalLinkSymbol, Doc, Star, Fork } from './SocialMedia/Logos';

// content.json is a self-designated file for the future us to change some aspect of the website.
import content from '../config/content';
/* End of import */

/* Start of Styled Components, aka CSS-in-JS */
const Card = styled.div.attrs({
	className: `ma2 pa2 shadow-4 br2`
})``

const CardWrapper = styled.div.attrs({
	className: "w5 h5 relative"
})``

const Top = styled.span.attrs({
	className: `flex flex-nowrap flex-row justify-between items-center`
})``

const Name = styled.h3.attrs({
	className: `mv0`
})``

const Desc = styled.p.attrs({
	className: `lh-title`
})``

const Bottom = styled.span.attrs({
	className: `w-100 absolute left-0 bottom-0 flex flex-nowrap flex-column`
})``

const Size = styled.span.attrs({
	className: `font-ubuntu-mono`
})``

const Stars = styled.span.attrs({
	className: `ph2 flex flex-nowrap items-center font-ubuntu-mono`
})``

const Forks = styled.span.attrs({
	className: `ph2 flex flex-nowrap items-center font-ubuntu-mono`
})``

const FlexRow = styled.span.attrs({
	className: `flex flex-nowrap flex-row`
})``

const FlexBetween = styled.span.attrs({
	className: `flex flex-nowrap flex-row justify-between`
})``

const Language = styled.span.attrs({
	className: `f6 pr3 pv1`
})``

const Languages = styled.div.attrs({
	className: `pt1 font-ubuntu-mono flex flex-wrap flex-row`
})``
/* End of Styled Components */

/* React Class Component (like any other class in other OOP language with the addition of lifecycles), provides you with the ability to leverage State and Lifecycle.

https://reactjs.org/docs/react-component.html
*/
class LanguagesContainer extends Component {
	render() {
		const { langColors, languages } = this.props;
		
		let langSum = 0;
		for (let lang in languages) {
			langSum += languages[lang];
		}

		const finalizedLangs = [];
		let ind = 0;
		for (let lang in languages) {
			const size = languages[lang];
			langSum += size;
			// language is shown only if its size exceeds a certain threshold.
			if (size / langSum > content.language_threshold) {
				finalizedLangs.push(
					<Language key={ind} style={{color: `${langColors[lang]}`}}>
						{lang}
					</Language>
				)
			}
			ind++;
		}
		return (
			<Languages>
				{finalizedLangs}
			</Languages>
		)
	}
}

export default class RepoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: {}
		};
	}

	componentDidMount() {
		const { repo } = this.props;
		fetch(repo.languages_url)
		.then(resp => resp.json())
		.then(languages => {
			this.props.updateLanguages(languages);
			this.props.updateTop3Languages();
			this.setState({ languages: languages });
		})
	}
	
	render() {
		const { repo, langColors } = this.props;
		const { languages } = this.state;
		const { html_url, homepage } = repo;
		return (
			<Card>
				<CardWrapper>
					<Top>
						<Doc />
						<FlexRow>
							{html_url && <GitHub urlToUse={html_url} />}
							{homepage && <ExternalLinkSymbol urlToUse={homepage} />}
						</FlexRow>
					</Top>

					<Name>{repo.name}</Name>
					<Desc>{repo.description}</Desc>

					<Bottom>
						<FlexBetween>
							<Size>{repo.size.toLocaleString()} KB</Size>
							<FlexRow>
								<Stars>
									<Star />
									&nbsp;{repo.stargazers_count}
								</Stars>
								<Forks>
									<Fork />
									&nbsp;{repo.forks_count}
								</Forks>
							</FlexRow>
						</FlexBetween>
						<LanguagesContainer languages={languages} langColors={langColors} />
					</Bottom>
				</CardWrapper>
			</Card>
		)
	}
}