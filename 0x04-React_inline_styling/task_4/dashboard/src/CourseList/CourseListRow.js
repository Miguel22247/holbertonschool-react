import PropTypes from 'prop-types';
import React, { Fragment }from 'react';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	let myElement;
	if (isHeader === true) {
		if (textSecondCell === null) {
			myElement = <th colSpan="2">{textFirstCell}</th>;
		} else {
			myElement = (
				<Fragment>
					<th>{textFirstCell}</th>
					<th>{textSecondCell}</th>
				</Fragment>
			);
		}
	} else {
		myElement = (
			<Fragment>
				<td>{textFirstCell}</td>
				<td>{textSecondCell}</td>
			</Fragment>
		);
	}
	return (
		<tr>{myElement}</tr>
	);
}

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null
};

export default CourseListRow;
