const path=require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/js/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'build.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(scss|sass)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                use:[
                    {loader:'url-loader',options:{limit:5000}},
                    'image-webpack-loader'
                ]
            },
            {
                test:/\.js/,
                exclude:/node_module/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['es2015'],
                            plugins:['transform-runtime']
                        }                        
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:[
                    'vue-loader'
                ]
            }
        ]
    }

}