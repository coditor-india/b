let fs = require('fs');
const minify = require('minify');

let dir = './czn-proto/public/js/v1.0.1/custom';

traverse(dir);

function traverse(dir) {
 	let files = fs.readdirSync(dir);
	for(let f of files) {
		let file = dir + '/' + f;
		if(f.endsWith('.js')) {
			minify(file, 'name').then(function(minified) {
				fs.writeFileSync(file, minified);
			}).catch((e) => { console.log(e); });
		} else {
			traverse(file);
		}
	}
}
