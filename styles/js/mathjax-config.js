window.MathJax = {
    loader: {
            load: ['[tex]/color','[tex]/physics']
    },
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        packages: {'[+]': ['color','physics']}, // ams, newcommand, noundefinded, require, autoload and configmacros are autoloaded.
        tags: 'ams',
        // processRefs: true,
        // processEnvironments: true,
        useLabelIds: false,
        baseURL:
            (document.getElementsByTagName('base').length === 0) ? '' : String(document.location).replace(/#.*$/, ''),
        macros: {
            binary: '\\mathbb\{B\}',
            complex: '\\mathbb\{C\}',
            real: '\\mathbb\{R\}',
            natural: '\\mathbb\{N\}',
            integer: '\\mathbb\{Z\}',
            id: '\\mathbb\{I\}',
            hilb: '\\mathcal\{H\}',
            sgn: '\\operatorname\{sgn\}',

            trans: ['#1^\\mathsf\{T\}',1],
            outter: '\\ketbra',
            one: '\\mathbb\{1\}',
            zero: '\\mathbb\{0\}',

            prob: ['\\mathbb{P}\\left[ #1\\right]',1],
            ave: ['\\mathbb{E}\\left[ #1\\right]',1],

            bdOp: '\\mathcal\{B\}',

            spX: '\\mathcal\{X\}',
            spY: '\\mathcal\{Y\}',
        }
    },
    svg: {
        fontCache: 'global'
    },
};