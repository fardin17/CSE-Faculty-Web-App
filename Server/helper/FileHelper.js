import multer from 'multer';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		cb(
			null,
			new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname,
		);
	},
});
const filefilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/png'
	) {
		cb(null, true);
	} else if (file.mimetype === 'application/pdf') {
		cb(null, 'files');
	} else {
		cb(null, false);
	}
};
const upload = multer({ storage: storage, fileFilter: filefilter });

export default upload;
