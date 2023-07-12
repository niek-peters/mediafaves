import { get, writable } from 'svelte/store';

export const background = writable<string | null>(null);

function loadImage(node: HTMLDivElement) {
	new Promise(() => {
		const background_url = get(background);
		if (!background_url) return;

		const img = new Image();
		img.style.minWidth = '100vw';
		img.style.minHeight = '100vh';
		img.src = background_url;
		img.decode().then(() => node.appendChild(img));
	});
}

export const backgroundHandlers = {
	loadImage
};
