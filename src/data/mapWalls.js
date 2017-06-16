const mapWalls = [
	{xpos: 1216, ypos: 96}
	,{xpos: 1248, ypos: 96}
	,{xpos: 1280, ypos: 96}
	,{xpos: 1312, ypos: 96}
	,{xpos: 1344, ypos: 96}
	,{xpos: 1376, ypos: 96}
	,{xpos: 1408, ypos: 96}
	,{xpos: 1440, ypos: 96}
	,{xpos: 1472, ypos: 96}
	,{xpos: 1504, ypos: 96}
	,{xpos: 1536, ypos: 96}
	,{xpos: 1568, ypos: 96}
	,{xpos: 1600, ypos: 96}
	,{xpos: 1632, ypos: 96}
	,{xpos: 1664, ypos: 96}
	,{xpos: 960, ypos: 128}
	,{xpos: 992, ypos: 128}
	,{xpos: 1024, ypos: 128}
	,{xpos: 1056, ypos: 128}
	,{xpos: 1088, ypos: 128}
	,{xpos: 1120, ypos: 128}
	,{xpos: 1152, ypos: 128}
	,{xpos: 1184, ypos: 128}
	,{xpos: 1216, ypos: 128}
	,{xpos: 1248, ypos: 128}
	,{xpos: 1280, ypos: 128}
	,{xpos: 1312, ypos: 128}
	,{xpos: 1376, ypos: 128}
	,{xpos: 1408, ypos: 128}
	,{xpos: 1440, ypos: 128}
	,{xpos: 1472, ypos: 128}
	,{xpos: 1504, ypos: 128}
	,{xpos: 1536, ypos: 128}
	,{xpos: 1568, ypos: 128}
	,{xpos: 1600, ypos: 128}
	,{xpos: 1632, ypos: 128}
	,{xpos: 1664, ypos: 128}
	,{xpos: 1696, ypos: 128}
	,{xpos: 1728, ypos: 128}
	,{xpos: 1760, ypos: 128}
	,{xpos: 1792, ypos: 128}
	,{xpos: 1824, ypos: 128}
	,{xpos: 960, ypos: 160}
	,{xpos: 992, ypos: 160}
	,{xpos: 1024, ypos: 160}
	,{xpos: 1056, ypos: 160}
	,{xpos: 1088, ypos: 160}
	,{xpos: 1120, ypos: 160}
	,{xpos: 1152, ypos: 160}
	,{xpos: 1184, ypos: 160}
	,{xpos: 1216, ypos: 160}
	,{xpos: 1248, ypos: 160}
	,{xpos: 1280, ypos: 160}
	,{xpos: 1312, ypos: 160}
	,{xpos: 1344, ypos: 160}
	,{xpos: 1376, ypos: 160}
	,{xpos: 1664, ypos: 160}
	,{xpos: 1696, ypos: 160}
	,{xpos: 1728, ypos: 160}
	,{xpos: 1760, ypos: 160}
	,{xpos: 1792, ypos: 160}
	,{xpos: 1824, ypos: 160}
	,{xpos: 1856, ypos: 160}
	,{xpos: 1888, ypos: 160}
	,{xpos: 928, ypos: 192}
	,{xpos: 960, ypos: 192}
	,{xpos: 992, ypos: 192}
	,{xpos: 1024, ypos: 192}
	,{xpos: 1056, ypos: 192}
	,{xpos: 1088, ypos: 192}
	,{xpos: 1120, ypos: 192}
	,{xpos: 1152, ypos: 192}
	,{xpos: 1184, ypos: 192}
	,{xpos: 1280, ypos: 192}
	,{xpos: 1312, ypos: 192}
	,{xpos: 1344, ypos: 192}
	,{xpos: 1856, ypos: 192}
	,{xpos: 1888, ypos: 192}
	,{xpos: 1920, ypos: 192}
	,{xpos: 928, ypos: 224}
	,{xpos: 960, ypos: 224}
	,{xpos: 992, ypos: 224}
	,{xpos: 1024, ypos: 224}
	,{xpos: 1056, ypos: 224}
	,{xpos: 1088, ypos: 224}
	,{xpos: 1120, ypos: 224}
	,{xpos: 1152, ypos: 224}
	,{xpos: 1888, ypos: 224}
	,{xpos: 1920, ypos: 224}
	,{xpos: 1952, ypos: 224}
	,{xpos: 1984, ypos: 224}
	,{xpos: 928, ypos: 256}
	,{xpos: 960, ypos: 256}
	,{xpos: 992, ypos: 256}
	,{xpos: 1024, ypos: 256}
	,{xpos: 1056, ypos: 256}
	,{xpos: 1088, ypos: 256}
	,{xpos: 1120, ypos: 256}
	,{xpos: 1888, ypos: 256}
	,{xpos: 1920, ypos: 256}
	,{xpos: 1952, ypos: 256}
	,{xpos: 1984, ypos: 256}
	,{xpos: 928, ypos: 288}
	,{xpos: 960, ypos: 288}
	,{xpos: 992, ypos: 288}
	,{xpos: 1024, ypos: 288}
	,{xpos: 1056, ypos: 288}
	,{xpos: 1088, ypos: 288}
	,{xpos: 1120, ypos: 288}
	,{xpos: 1152, ypos: 288}
	,{xpos: 1184, ypos: 288}
	,{xpos: 1216, ypos: 288}
	,{xpos: 1248, ypos: 288}
	,{xpos: 1856, ypos: 288}
	,{xpos: 1888, ypos: 288}
	,{xpos: 1920, ypos: 288}
	,{xpos: 1952, ypos: 288}
	,{xpos: 1984, ypos: 288}
	,{xpos: 2016, ypos: 288}
	,{xpos: 928, ypos: 320}
	,{xpos: 960, ypos: 320}
	,{xpos: 992, ypos: 320}
	,{xpos: 1024, ypos: 320}
	,{xpos: 1056, ypos: 320}
	,{xpos: 1088, ypos: 320}
	,{xpos: 1120, ypos: 320}
	,{xpos: 1152, ypos: 320}
	,{xpos: 1184, ypos: 320}
	,{xpos: 1216, ypos: 320}
	,{xpos: 1248, ypos: 320}
	,{xpos: 1344, ypos: 320}
	,{xpos: 1376, ypos: 320}
	,{xpos: 1408, ypos: 320}
	,{xpos: 1440, ypos: 320}
	,{xpos: 1472, ypos: 320}
	,{xpos: 1504, ypos: 320}
	,{xpos: 1536, ypos: 320}
	,{xpos: 1568, ypos: 320}
	,{xpos: 1600, ypos: 320}
	,{xpos: 1632, ypos: 320}
	,{xpos: 1664, ypos: 320}
	,{xpos: 1856, ypos: 320}
	,{xpos: 1984, ypos: 320}
	,{xpos: 2016, ypos: 320}
	,{xpos: 928, ypos: 352}
	,{xpos: 960, ypos: 352}
	,{xpos: 992, ypos: 352}
	,{xpos: 1024, ypos: 352}
	,{xpos: 1056, ypos: 352}
	,{xpos: 1088, ypos: 352}
	,{xpos: 1120, ypos: 352}
	,{xpos: 1152, ypos: 352}
	,{xpos: 1184, ypos: 352}
	,{xpos: 1216, ypos: 352}
	,{xpos: 1248, ypos: 352}
	,{xpos: 1344, ypos: 352}
	,{xpos: 1376, ypos: 352}
	,{xpos: 1408, ypos: 352}
	,{xpos: 1440, ypos: 352}
	,{xpos: 1472, ypos: 352}
	,{xpos: 1504, ypos: 352}
	,{xpos: 1536, ypos: 352}
	,{xpos: 1568, ypos: 352}
	,{xpos: 1600, ypos: 352}
	,{xpos: 1632, ypos: 352}
	,{xpos: 1664, ypos: 352}
	,{xpos: 1856, ypos: 352}
	,{xpos: 1984, ypos: 352}
	,{xpos: 2016, ypos: 352}
	,{xpos: 992, ypos: 384}
	,{xpos: 1024, ypos: 384}
	,{xpos: 1056, ypos: 384}
	,{xpos: 1088, ypos: 384}
	,{xpos: 1120, ypos: 384}
	,{xpos: 1152, ypos: 384}
	,{xpos: 1184, ypos: 384}
	,{xpos: 1216, ypos: 384}
	,{xpos: 1248, ypos: 384}
	,{xpos: 1856, ypos: 384}
	,{xpos: 1984, ypos: 384}
	,{xpos: 2016, ypos: 384}
	,{xpos: 2048, ypos: 384}
	,{xpos: 992, ypos: 416}
	,{xpos: 1024, ypos: 416}
	,{xpos: 1056, ypos: 416}
	,{xpos: 1088, ypos: 416}
	,{xpos: 1120, ypos: 416}
	,{xpos: 1152, ypos: 416}
	,{xpos: 1184, ypos: 416}
	,{xpos: 1216, ypos: 416}
	,{xpos: 1248, ypos: 416}
	,{xpos: 1376, ypos: 416}
	,{xpos: 1408, ypos: 416}
	,{xpos: 1440, ypos: 416}
	,{xpos: 1472, ypos: 416}
	,{xpos: 1504, ypos: 416}
	,{xpos: 1536, ypos: 416}
	,{xpos: 1568, ypos: 416}
	,{xpos: 1600, ypos: 416}
	,{xpos: 1632, ypos: 416}
	,{xpos: 1664, ypos: 416}
	,{xpos: 1856, ypos: 416}
	,{xpos: 1984, ypos: 416}
	,{xpos: 2016, ypos: 416}
	,{xpos: 2048, ypos: 416}
	,{xpos: 928, ypos: 448}
	,{xpos: 960, ypos: 448}
	,{xpos: 992, ypos: 448}
	,{xpos: 1024, ypos: 448}
	,{xpos: 1056, ypos: 448}
	,{xpos: 1088, ypos: 448}
	,{xpos: 1120, ypos: 448}
	,{xpos: 1152, ypos: 448}
	,{xpos: 1184, ypos: 448}
	,{xpos: 1344, ypos: 448}
	,{xpos: 1376, ypos: 448}
	,{xpos: 1408, ypos: 448}
	,{xpos: 1440, ypos: 448}
	,{xpos: 1472, ypos: 448}
	,{xpos: 1504, ypos: 448}
	,{xpos: 1536, ypos: 448}
	,{xpos: 1568, ypos: 448}
	,{xpos: 1600, ypos: 448}
	,{xpos: 1632, ypos: 448}
	,{xpos: 1664, ypos: 448}
	,{xpos: 1696, ypos: 448}
	,{xpos: 1824, ypos: 448}
	,{xpos: 1856, ypos: 448}
	,{xpos: 1984, ypos: 448}
	,{xpos: 2016, ypos: 448}
	,{xpos: 2048, ypos: 448}
	,{xpos: 928, ypos: 480}
	,{xpos: 960, ypos: 480}
	,{xpos: 992, ypos: 480}
	,{xpos: 1024, ypos: 480}
	,{xpos: 1056, ypos: 480}
	,{xpos: 1088, ypos: 480}
	,{xpos: 1120, ypos: 480}
	,{xpos: 1152, ypos: 480}
	,{xpos: 1184, ypos: 480}

	,{xpos: 1344, ypos: 480}
	,{xpos: 1376, ypos: 480}
	,{xpos: 1408, ypos: 480}
	,{xpos: 1440, ypos: 480}
	,{xpos: 1472, ypos: 480}
	,{xpos: 1504, ypos: 480}
	,{xpos: 1536, ypos: 480}
	,{xpos: 1568, ypos: 480}
	,{xpos: 1600, ypos: 480}
	,{xpos: 1632, ypos: 480}
	,{xpos: 1664, ypos: 480}
	,{xpos: 1696, ypos: 480}
	,{xpos: 1824, ypos: 480}
	,{xpos: 1856, ypos: 480}
	,{xpos: 1888, ypos: 480}
	,{xpos: 1984, ypos: 480}
	,{xpos: 2016, ypos: 480}
	,{xpos: 2048, ypos: 480}
	,{xpos: 928, ypos: 512}
	,{xpos: 960, ypos: 512}
	,{xpos: 992, ypos: 512}
	,{xpos: 1024, ypos: 512}
	,{xpos: 1056, ypos: 512}
	,{xpos: 1088, ypos: 512}
	,{xpos: 1120, ypos: 512}
	,{xpos: 1152, ypos: 512}
	,{xpos: 1184, ypos: 512}

	,{xpos: 1344, ypos: 512}
	,{xpos: 1376, ypos: 512}
	,{xpos: 1408, ypos: 512}
	,{xpos: 1440, ypos: 512}
	,{xpos: 1472, ypos: 512}
	,{xpos: 1504, ypos: 512}
	,{xpos: 1536, ypos: 512}
	,{xpos: 1568, ypos: 512}
	,{xpos: 1600, ypos: 512}
	,{xpos: 1632, ypos: 512}
	,{xpos: 1664, ypos: 512}
	,{xpos: 1696, ypos: 512}
	,{xpos: 1856, ypos: 512}
	,{xpos: 1888, ypos: 512}
	,{xpos: 1920, ypos: 512}
	,{xpos: 1952, ypos: 512}
	,{xpos: 1984, ypos: 512}
	,{xpos: 2016, ypos: 512}
	,{xpos: 2048, ypos: 512}
	,{xpos: 928, ypos: 544}
	,{xpos: 960, ypos: 544}
	,{xpos: 992, ypos: 544}
	,{xpos: 1024, ypos: 544}
	,{xpos: 1056, ypos: 544}
	,{xpos: 1088, ypos: 544}
	,{xpos: 1120, ypos: 544}
	,{xpos: 1152, ypos: 544}
	,{xpos: 1184, ypos: 544}
	,{xpos: 1216, ypos: 544}
	,{xpos: 1312, ypos: 544}
	,{xpos: 1344, ypos: 544}
	,{xpos: 1376, ypos: 544}
	,{xpos: 1408, ypos: 544}
	,{xpos: 1440, ypos: 544}
	,{xpos: 1472, ypos: 544}
	,{xpos: 1504, ypos: 544}
	,{xpos: 1536, ypos: 544}
	,{xpos: 1568, ypos: 544}
	,{xpos: 1600, ypos: 544}
	,{xpos: 1632, ypos: 544}
	,{xpos: 1664, ypos: 544}
	,{xpos: 1696, ypos: 544}
	,{xpos: 1856, ypos: 544}
	,{xpos: 1888, ypos: 544}
	,{xpos: 1920, ypos: 544}
	,{xpos: 1952, ypos: 544}
	,{xpos: 1984, ypos: 544}
	,{xpos: 2016, ypos: 544}
	,{xpos: 2048, ypos: 544}
	,{xpos: 832, ypos: 576}
	,{xpos: 864, ypos: 576}
	,{xpos: 896, ypos: 576}
	,{xpos: 928, ypos: 576}
	,{xpos: 960, ypos: 576}
	,{xpos: 992, ypos: 576}
	,{xpos: 1024, ypos: 576}
	,{xpos: 1056, ypos: 576}
	,{xpos: 1088, ypos: 576}
	,{xpos: 1120, ypos: 576}
	,{xpos: 1152, ypos: 576}
	,{xpos: 1184, ypos: 576}
	,{xpos: 1216, ypos: 576}
	,{xpos: 1312, ypos: 576}
	,{xpos: 1344, ypos: 576}
	,{xpos: 1376, ypos: 576}
	,{xpos: 1408, ypos: 576}
	,{xpos: 1440, ypos: 576}
	,{xpos: 1472, ypos: 576}
	,{xpos: 1504, ypos: 576}
	,{xpos: 1536, ypos: 576}
	,{xpos: 1568, ypos: 576}
	,{xpos: 1600, ypos: 576}
	,{xpos: 1632, ypos: 576}
	,{xpos: 1664, ypos: 576}
	,{xpos: 1696, ypos: 576}
	,{xpos: 1856, ypos: 576}
	,{xpos: 1888, ypos: 576}
	,{xpos: 1920, ypos: 576}
	,{xpos: 1952, ypos: 576}
	,{xpos: 1984, ypos: 576}
	,{xpos: 2016, ypos: 576}
	,{xpos: 2048, ypos: 576}
	,{xpos: 832, ypos: 608}
	,{xpos: 864, ypos: 608}
	,{xpos: 896, ypos: 608}
	,{xpos: 928, ypos: 608}
	,{xpos: 960, ypos: 608}
	,{xpos: 992, ypos: 608}
	,{xpos: 1024, ypos: 608}
	,{xpos: 1056, ypos: 608}
	,{xpos: 1088, ypos: 608}
	,{xpos: 1120, ypos: 608}
	,{xpos: 1152, ypos: 608}
	,{xpos: 1184, ypos: 608}
	,{xpos: 1216, ypos: 608}
	,{xpos: 1312, ypos: 608}
	,{xpos: 1344, ypos: 608}
	,{xpos: 1376, ypos: 608}
	,{xpos: 1408, ypos: 608}
	,{xpos: 1440, ypos: 608}
	,{xpos: 1472, ypos: 608}
	,{xpos: 1568, ypos: 608}
	,{xpos: 1600, ypos: 608}
	,{xpos: 1632, ypos: 608}
	,{xpos: 1664, ypos: 608}
	,{xpos: 1696, ypos: 608}
	,{xpos: 1728, ypos: 608}
	,{xpos: 1952, ypos: 608}
	,{xpos: 1984, ypos: 608}
	,{xpos: 2016, ypos: 608}
	,{xpos: 2048, ypos: 608}
	,{xpos: 2080, ypos: 608}
	,{xpos: 2112, ypos: 608}
	,{xpos: 2144, ypos: 608}
	,{xpos: 832, ypos: 640}
	,{xpos: 864, ypos: 640}
	,{xpos: 896, ypos: 640}
	,{xpos: 928, ypos: 640}
	,{xpos: 960, ypos: 640}
	,{xpos: 992, ypos: 640}
	,{xpos: 1024, ypos: 640}
	,{xpos: 1056, ypos: 640}
	,{xpos: 1088, ypos: 640}
	,{xpos: 1120, ypos: 640}
	,{xpos: 1152, ypos: 640}
	,{xpos: 1184, ypos: 640}
	,{xpos: 1216, ypos: 640}
	,{xpos: 1312, ypos: 640}
	,{xpos: 1344, ypos: 640}
	,{xpos: 1632, ypos: 640}
	,{xpos: 1664, ypos: 640}
	,{xpos: 1696, ypos: 640}
	,{xpos: 1728, ypos: 640}
	,{xpos: 2016, ypos: 640}
	,{xpos: 2048, ypos: 640}
	,{xpos: 2080, ypos: 640}
	,{xpos: 2112, ypos: 640}
	,{xpos: 2144, ypos: 640}
	,{xpos: 864, ypos: 672}
	,{xpos: 896, ypos: 672}
	,{xpos: 928, ypos: 672}
	,{xpos: 1056, ypos: 672}
	,{xpos: 1088, ypos: 672}
	,{xpos: 1120, ypos: 672}
	,{xpos: 1152, ypos: 672}
	,{xpos: 1184, ypos: 672}
	,{xpos: 1216, ypos: 672}

	,{xpos: 1312, ypos: 672}
	,{xpos: 1344, ypos: 672}
	,{xpos: 1632, ypos: 672}
	,{xpos: 1664, ypos: 672}
	,{xpos: 1696, ypos: 672}
	,{xpos: 1728, ypos: 672}
	,{xpos: 2016, ypos: 672}
	,{xpos: 2048, ypos: 672}
	,{xpos: 2080, ypos: 672}
	,{xpos: 2112, ypos: 672}
	,{xpos: 2144, ypos: 672}
	,{xpos: 864, ypos: 704}
	,{xpos: 896, ypos: 704}
	,{xpos: 928, ypos: 704}
	,{xpos: 960, ypos: 704}
	,{xpos: 1088, ypos: 704}
	,{xpos: 1120, ypos: 704}
	,{xpos: 1152, ypos: 704}
	,{xpos: 1184, ypos: 704}
	,{xpos: 1216, ypos: 704}

	,{xpos: 1312, ypos: 704}
	,{xpos: 1344, ypos: 704}
	,{xpos: 1376, ypos: 704}
	,{xpos: 1632, ypos: 704}
	,{xpos: 1664, ypos: 704}
	,{xpos: 1696, ypos: 704}
	,{xpos: 1728, ypos: 704}
	,{xpos: 1824, ypos: 704}
	,{xpos: 1856, ypos: 704}
	,{xpos: 1888, ypos: 704}
	,{xpos: 864, ypos: 736}
	,{xpos: 896, ypos: 736}
	,{xpos: 928, ypos: 736}
	,{xpos: 960, ypos: 736}
	,{xpos: 1120, ypos: 736}
	,{xpos: 1152, ypos: 736}
	,{xpos: 1312, ypos: 736}
	,{xpos: 1344, ypos: 736}
	,{xpos: 1376, ypos: 736}
	,{xpos: 1632, ypos: 736}
	,{xpos: 1664, ypos: 736}
	,{xpos: 1696, ypos: 736}
	,{xpos: 1728, ypos: 736}
	,{xpos: 1856, ypos: 736}
	,{xpos: 1888, ypos: 736}
	,{xpos: 1120, ypos: 768}
	,{xpos: 1152, ypos: 768}
	,{xpos: 1632, ypos: 768}
	,{xpos: 1664, ypos: 768}
	,{xpos: 1696, ypos: 768}
	,{xpos: 1728, ypos: 768}
	,{xpos: 2016, ypos: 768}
	,{xpos: 2048, ypos: 768}
	,{xpos: 2080, ypos: 768}
	,{xpos: 2112, ypos: 768}
	,{xpos: 2016, ypos: 800}
	,{xpos: 2048, ypos: 800}
	,{xpos: 2080, ypos: 800}
	,{xpos: 2112, ypos: 800}
	,{xpos: 864, ypos: 832}
	,{xpos: 896, ypos: 832}
	,{xpos: 928, ypos: 832}
	,{xpos: 960, ypos: 832}
	,{xpos: 992, ypos: 832}
	,{xpos: 1504, ypos: 832}
	,{xpos: 1536, ypos: 832}
	,{xpos: 1824, ypos: 832}
	,{xpos: 1856, ypos: 832}
	,{xpos: 1888, ypos: 832}
	,{xpos: 1920, ypos: 832}
	,{xpos: 1952, ypos: 832}
	,{xpos: 1984, ypos: 832}
	,{xpos: 2016, ypos: 832}
	,{xpos: 2048, ypos: 832}
	,{xpos: 2080, ypos: 832}
	,{xpos: 2112, ypos: 832}
	,{xpos: 2144, ypos: 832}
	,{xpos: 864, ypos: 864}
	,{xpos: 896, ypos: 864}
	,{xpos: 928, ypos: 864}
	,{xpos: 960, ypos: 864}
	,{xpos: 992, ypos: 864}
	,{xpos: 1312, ypos: 864}
	,{xpos: 1344, ypos: 864}
	,{xpos: 1376, ypos: 864}
	,{xpos: 1472, ypos: 864}
	,{xpos: 1504, ypos: 864}
	,{xpos: 1536, ypos: 864}
	,{xpos: 1568, ypos: 864}
	,{xpos: 1792, ypos: 864}
	,{xpos: 1824, ypos: 864}
	,{xpos: 1856, ypos: 864}
	,{xpos: 1888, ypos: 864}
	,{xpos: 1920, ypos: 864}
	,{xpos: 1952, ypos: 864}
	,{xpos: 1984, ypos: 864}
	,{xpos: 2016, ypos: 864}
	,{xpos: 2048, ypos: 864}
	,{xpos: 2080, ypos: 864}
	,{xpos: 2112, ypos: 864}
	,{xpos: 2144, ypos: 864}
	,{xpos: 2176, ypos: 864}
	,{xpos: 864, ypos: 896}
	,{xpos: 896, ypos: 896}
	,{xpos: 928, ypos: 896}
	,{xpos: 960, ypos: 896}
	,{xpos: 992, ypos: 896}
	,{xpos: 1024, ypos: 896}
	,{xpos: 1056, ypos: 896}
	,{xpos: 1088, ypos: 896}
	,{xpos: 1120, ypos: 896}
	,{xpos: 1152, ypos: 896}
	,{xpos: 1184, ypos: 896}
	,{xpos: 1216, ypos: 896}
	,{xpos: 1248, ypos: 896}
	,{xpos: 1280, ypos: 896}
	,{xpos: 1312, ypos: 896}
	,{xpos: 1344, ypos: 896}
	,{xpos: 1376, ypos: 896}
	,{xpos: 1472, ypos: 896}
	,{xpos: 1504, ypos: 896}
	,{xpos: 1536, ypos: 896}
	,{xpos: 1568, ypos: 896}
	,{xpos: 1664, ypos: 896}
	,{xpos: 1696, ypos: 896}
	,{xpos: 1728, ypos: 896}
	,{xpos: 1792, ypos: 896}
	,{xpos: 1824, ypos: 896}
	,{xpos: 2112, ypos: 896}
	,{xpos: 2144, ypos: 896}
	,{xpos: 2176, ypos: 896}
	,{xpos: 2208, ypos: 896}
	,{xpos: 2240, ypos: 896}
	,{xpos: 2272, ypos: 896}
	,{xpos: 2304, ypos: 896}
	,{xpos: 2336, ypos: 896}
	,{xpos: 2368, ypos: 896}
	,{xpos: 864, ypos: 928}
	,{xpos: 896, ypos: 928}
	,{xpos: 928, ypos: 928}
	,{xpos: 960, ypos: 928}
	,{xpos: 992, ypos: 928}
	,{xpos: 1024, ypos: 928}
	,{xpos: 1056, ypos: 928}
	,{xpos: 1088, ypos: 928}
	,{xpos: 1120, ypos: 928}
	,{xpos: 1152, ypos: 928}
	,{xpos: 1184, ypos: 928}
	,{xpos: 1216, ypos: 928}
	,{xpos: 1248, ypos: 928}
	,{xpos: 1280, ypos: 928}
	,{xpos: 1312, ypos: 928}
	,{xpos: 1344, ypos: 928}
	,{xpos: 1376, ypos: 928}
	,{xpos: 1504, ypos: 928}
	,{xpos: 1536, ypos: 928}
	,{xpos: 1568, ypos: 928}
	,{xpos: 1664, ypos: 928}
	,{xpos: 1696, ypos: 928}
	,{xpos: 1728, ypos: 928}
	,{xpos: 1792, ypos: 928}
	,{xpos: 1824, ypos: 928}
	,{xpos: 864, ypos: 960}
	,{xpos: 896, ypos: 960}
	,{xpos: 928, ypos: 960}
	,{xpos: 960, ypos: 960}
	,{xpos: 992, ypos: 960}
	,{xpos: 1024, ypos: 960}
	,{xpos: 1056, ypos: 960}
	,{xpos: 1088, ypos: 960}
	,{xpos: 1120, ypos: 960}
	,{xpos: 1152, ypos: 960}
	,{xpos: 1184, ypos: 960}
	,{xpos: 1216, ypos: 960}
	,{xpos: 1248, ypos: 960}
	,{xpos: 1280, ypos: 960}
	,{xpos: 1312, ypos: 960}
	,{xpos: 1344, ypos: 960}
	,{xpos: 1376, ypos: 960}
	,{xpos: 1536, ypos: 960}
	,{xpos: 1568, ypos: 960}
	,{xpos: 1664, ypos: 960}
	,{xpos: 1696, ypos: 960}
	,{xpos: 1728, ypos: 960}
	,{xpos: 1792, ypos: 960}
	,{xpos: 1824, ypos: 960}
	,{xpos: 960, ypos: 992}
	,{xpos: 992, ypos: 992}
	,{xpos: 1024, ypos: 992}
	,{xpos: 1056, ypos: 992}
	,{xpos: 1088, ypos: 992}
	,{xpos: 1120, ypos: 992}
	,{xpos: 1152, ypos: 992}
	,{xpos: 1184, ypos: 992}
	,{xpos: 1216, ypos: 992}
	,{xpos: 1248, ypos: 992}
	,{xpos: 1280, ypos: 992}
	,{xpos: 1312, ypos: 992}
	,{xpos: 1344, ypos: 992}
	,{xpos: 1376, ypos: 992}
	,{xpos: 1536, ypos: 992}
	,{xpos: 1568, ypos: 992}
	,{xpos: 1600, ypos: 992}
	,{xpos: 1632, ypos: 992}
	,{xpos: 1664, ypos: 992}
	,{xpos: 1696, ypos: 992}
	,{xpos: 1728, ypos: 992}
	,{xpos: 1760, ypos: 992}
	,{xpos: 1792, ypos: 992}
	,{xpos: 1824, ypos: 992}
	,{xpos: 960, ypos: 1024}
	,{xpos: 992, ypos: 1024}
	,{xpos: 1024, ypos: 1024}
	,{xpos: 1056, ypos: 1024}
	,{xpos: 1088, ypos: 1024}
	,{xpos: 1120, ypos: 1024}
	,{xpos: 1152, ypos: 1024}
	,{xpos: 1184, ypos: 1024}
	,{xpos: 1216, ypos: 1024}
	,{xpos: 1248, ypos: 1024}
	,{xpos: 1280, ypos: 1024}
	,{xpos: 1312, ypos: 1024}
	,{xpos: 1344, ypos: 1024}
	,{xpos: 1376, ypos: 1024}
	,{xpos: 1536, ypos: 1024}
	,{xpos: 1568, ypos: 1024}
	,{xpos: 1600, ypos: 1024}
	,{xpos: 1632, ypos: 1024}
	,{xpos: 1664, ypos: 1024}
	,{xpos: 1696, ypos: 1024}
	,{xpos: 1728, ypos: 1024}
	,{xpos: 1760, ypos: 1024}
	,{xpos: 1792, ypos: 1024}
	,{xpos: 1824, ypos: 1024}
	,{xpos: 1120, ypos: 1056}
	,{xpos: 1152, ypos: 1056}
	,{xpos: 1184, ypos: 1056}
	,{xpos: 1216, ypos: 1056}
	,{xpos: 1248, ypos: 1056}
	,{xpos: 1280, ypos: 1056}
	,{xpos: 1312, ypos: 1056}
	,{xpos: 1344, ypos: 1056}
	,{xpos: 1376, ypos: 1056}
	,{xpos: 1536, ypos: 1056}
	,{xpos: 1568, ypos: 1056}
	,{xpos: 1120, ypos: 1088}
	,{xpos: 1152, ypos: 1088}
	,{xpos: 1184, ypos: 1088}
	,{xpos: 1216, ypos: 1088}
	,{xpos: 1248, ypos: 1088}
	,{xpos: 1280, ypos: 1088}
	,{xpos: 1312, ypos: 1088}
	,{xpos: 1344, ypos: 1088}
	,{xpos: 1376, ypos: 1088}
	,{xpos: 1536, ypos: 1088}
	,{xpos: 1568, ypos: 1088}
	,{xpos: 1120, ypos: 1120}
	,{xpos: 1152, ypos: 1120}
	,{xpos: 1184, ypos: 1120}
	,{xpos: 1216, ypos: 1120}
	,{xpos: 1248, ypos: 1120}
	,{xpos: 1280, ypos: 1120}
	,{xpos: 1312, ypos: 1120}
	,{xpos: 1344, ypos: 1120}
	,{xpos: 1376, ypos: 1120}
	,{xpos: 1408, ypos: 1120}
	,{xpos: 1440, ypos: 1120}
	,{xpos: 1472, ypos: 1120}
	,{xpos: 1504, ypos: 1120}
	,{xpos: 1536, ypos: 1120}
	,{xpos: 1568, ypos: 1120}
]

const mapImage = new Image();
mapImage.src = require('../images/myFunMap.png');

export {mapWalls, mapImage};