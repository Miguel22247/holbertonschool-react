import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let tr = undefined;
  const styleRow = { backgroundColor: '#f5f5f5ab' };
	const styleHeaderRow = { backgroundColor: '#deb5b545' };

  if (isHeader === true) {
    if (textSecondCell === null) {
      tr = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      tr = (
        <Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </Fragment>
      );
    }
  } else {
    tr = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  let styleBackground;

  if (isHeader) {
    styleBackground = styleHeaderRow;
  } else {
    styleBackground = styleRow;
  }

return <tr style={ styleBackground }>{tr}</tr>;
};


CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number
  ]),
};

export default CourseListRow;
