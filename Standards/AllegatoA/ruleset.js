/**
 * 
 */

_global.HTMLCS_ALLEGATOA = {
    name: 'AllegatoA',
    description: 'Criteri e metodi per la verifica tecnica e requisiti tecnici di accessibilità previsti dalla legge 9 gennaio 2004, n.4',
    sniffs: [
        'Principle1.Guideline1_1.1_1_1',
    ],

    getMsgInfo: function(code) {
        console.log(code);
        return HTMLCS_WCAG2AAA.getMsgInfo(code);
    },

/*
    getMsgInfo: function(code) {
        var principles = {
            'Principle1': {
                name: 'Perceivable',
                link: 'http://www.w3.org/TR/WCAG20/#perceivable'
            },
            'Principle2': {
                name: 'Operable',
                link: 'http://www.w3.org/TR/WCAG20/#operable'
            },
            'Principle3': {
                name: 'Understandable',
                link: 'http://www.w3.org/TR/WCAG20/#understandable'
            },
            'Principle4': {
                name: 'Robust',
                link: 'http://www.w3.org/TR/WCAG20/#robust'
            },
        };

        // criterias
        var requisiti = {
            name: 'requisito1'

        }
    },
*/

}