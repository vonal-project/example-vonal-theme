// rollup.config.js
import sass from 'rollup-plugin-sass';

export default {
    input: ['./index.js'],
    output: {
        file: 'index.built.js',
        format: 'cjs',
    },
    plugins: [
        sass({
            insert: true
        })
    ]
}