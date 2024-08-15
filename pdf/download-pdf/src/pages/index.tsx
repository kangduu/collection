import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect } from 'react';

export default function HomePage() {
	// html2canvas;
	return (
		<div
			onClick={() => {
				const doc = document.createElement('div');
				doc.innerText = '123';
				// 使用 html2canvas 将 HTML 转换为图像
				html2canvas(doc, {
					backgroundColor: '#eee',
					foreignObjectRendering: true,
					removeContainer: true,
				}).then(canvas => {
					const imgData = canvas.toDataURL('image/png');
					const pdf = new jsPDF({
						orientation: 'portrait',
						unit: 'mm',
						format: 'a4',
					});
					// 添加图像到 PDF
					// @ts-ignore
					pdf.addImage(imgData, 'PNG', 0, 0);
					// 保存 PDF 文件
					pdf.save('sample.pdf');
				});
			}}>
			<h1>一、JSPDF</h1>
			即使尽量靠近的考虑的就是垃圾； 的实力绝对是 大家思考连接方式
			<p>都是垃圾分类看到</p>
			<h3>的路径算法课</h3>
		</div>
	);
}
