// SLIMSCROLL
// -----------------------------------
import $ from 'jquery';
// Slimscroll
import 'jquery-slimscroll';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Wrapper for jquery-slimscroll plugin
 */
const Scrollable = props => {

    const init = node =>
        $(node).slimScroll({
            height: props.height
        });

    return (
        <div ref={init} {...props}>
            {props.children}
        </div>
    )

}

Scrollable.propTypes = {
    /** height of the element */
    height: PropTypes.string
}

Scrollable.defaultProps = {
  height: 250
};

export default Scrollable