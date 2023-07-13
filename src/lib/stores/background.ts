import { get, writable } from 'svelte/store';

export const background = writable<string | null>(null);

function loadImage(node: HTMLDivElement) {
	new Promise(() => {
		const background_url = get(background);
		if (!background_url) return;

		const img = new Image();
		img.style.width = '100vw';
		img.style.height = '100vh';
		img.style.objectFit = 'cover';
		img.style.objectPosition = 'center';
		img.src = background_url;
		img.decode().then(() => node.appendChild(img));
	});
}

export const backgroundHandlers = {
	loadImage
};
