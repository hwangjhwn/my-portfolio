import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Font } from '@ckeditor/ckeditor5-font';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';

import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import CKFinderPlugin from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

export const editorConfig = {
	plugins: [
		Alignment,
		Essentials,
		Bold,
		Font,
		Italic,
		Link,
		MediaEmbed,
		Paragraph,
		SimpleUploadAdapter,
		ImageUploadPlugin,
		ImagePlugin,
		FontColor,
		Underline,
		Strikethrough,
	],

	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'bold',
			'italic',
			'underline',
			'strikeThrough',
			'fontSize',
			'fontColor',
			'alignment',
			'|',
			'imageUpload',
			'mediaEmbed',
		],
	},

	simpleUpload: {
		// The URL that the images are uploaded to.
		uploadUrl: 'https://api.masterpick.co.kr/api/editorUpload',

		// Enable the XMLHttpRequest.withCredentials property.
		withCredentials: false,

		// Headers sent along with the XMLHttpRequest to the upload server.
		headers: {
			'X-CSRF-TOKEN': 'CSRF-Token',
			Authorization: 'Bearer <JSON Web Token>',
		},
	},
};
