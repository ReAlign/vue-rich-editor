import Quill from 'quill';

const SizeStyle = Quill.import('attributors/style/size');
SizeStyle.whitelist = ['32px', '24px', '18px', '16px', '13px', '12px', false];

export default SizeStyle;
