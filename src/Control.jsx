import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mediaControlId: "",
            insertPos: null,
            editor: null
        }
    }

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        forID: PropTypes.string,
        value: PropTypes.node,
        classNameWrapper: PropTypes.string.isRequired,
        onOpenMediaLibrary: PropTypes.func.isRequired,
    }

    static defaultProps = {
        value: '',
    }

    shouldComponentUpdate(nextProps) {
        /**
         * Always update if the value or getAsset changes.
         */
        return true
    }

    log(msg) {
        console.log(msg)
    }

    render() {
        const {
            value,
            onChange
        } = this.props;
        return (
            <div>
                <p>Control.jsx, You can put some text into <code>&lt;input /&gt;</code></p>
                <textarea style={{border: "1px solid #000;", marginTop: 10}} value={value} onChange={(e) => {onChange(e.target.value)}}></textarea>
            </div>
        )
    }
}