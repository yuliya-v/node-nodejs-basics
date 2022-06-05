import { stdin, stdout } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  stdout.write('Введите ваш текст:\n');
	const reverseStr = new Transform({
		transform(chunk, encoding, callback) {
			callback(null, chunk.toString().split('').reverse().join('') + '\n\n');
		},
	});

	stdin.pipe(reverseStr).pipe(stdout);

};

transform();
