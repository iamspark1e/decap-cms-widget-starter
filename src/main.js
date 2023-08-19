import Control from './Control.jsx'
import Preview from './Preview.jsx'

if (typeof window !== 'undefined') {
    window.StarterControl = Control
    window.StarterPreview = Preview
}

export { Control as StarterControl, Preview as StarterPreview }