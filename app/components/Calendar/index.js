import React from 'react';
import PropTypes from 'prop-types';

function Calendar(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
}

Calendar.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default Calendar;
