/* Start of import */
import React, { Component } from 'react';
import RepoCard from './RepoCard';
import styled from 'styled-components';

// content.json is a self-designated file for the future us to change some aspect of the website.
import content from '../config/content';
/* End of import */

/* Start of Styled Components, aka CSS-in-JS */
const Container = styled.div.attrs({
	className: `w-80-l w-90 center shadow-3 br2`
})``

const Title = styled.h2.attrs({
	className: `w-100 ma0 pa3 tc`
})``

const LoadingMessage = styled.div.attrs({
	className: `flex justify-center items-center pa6`
})``

const Scroller = styled.div.attrs({
	className: `vh-75-l overflow-y-scroll-l`
})``

const RepoList = styled.div.attrs({
	className: `pb3 w-100 flex flex-wrap flex-row justify-center items-center`
})``
/* End of Styled Components */

/* React Class Component (like any other class in other OOP language with the addition of lifecycles), provides you with the ability to leverage State and Lifecycle.

https://reactjs.org/docs/react-component.html
*/
class WantedRepos extends Component {
	// normal method, called using this.filterRepositories().
	filterRepositories = (repos) => {
		const { number_of_repos_to_show } = content;
		return repos.map((repo, ind) => (
			(ind < number_of_repos_to_show || ind === -1) && <RepoCard key={ind} repo={repo} {...this.props} />
		))
	}

	render() {
		const { repos } = this.props;
		return (
			<RepoList>
				{this.filterRepositories(repos)}
			</RepoList>
		)
	}
}

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 repos: null
		};
	}
	
	// leveraging a lifecycle method.
	// componentDidMount is invoked immediately after a component is mounted (inserted into the DOM tree). 
	componentDidMount() {
		const { github_username, repo_endpoint_parameter} = content;

		/* Start of a part of Task 2 */

		/* Code goes below here */
		// Fetches user's repositories.

		/* End of a part of Task 2 */
	}

	render() {
		const { repos } = this.state;
		return (
			repos == null
			?
			<LoadingMessage>
				Loading...
			</LoadingMessage>
			:
			<Container>
				<Scroller>
					<Title>{content.title}</Title>
					<WantedRepos repos={repos} {...this.props} />
				</Scroller>
			</Container>
		)
	}
}

export default Projects;