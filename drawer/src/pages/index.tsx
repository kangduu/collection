import Drawer from '@/components/drawer';
import { Button, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

export default function HomePage() {
	return (
		<ConfigProvider locale={zhCN}>
			<Drawer
				onClose={() => {
					console.log('Drawer closed - onClose Event');
				}}
				content={props => {
					// 注意这里的render，每一次都会触发
					// 比如，当关闭时，可以不更新
					console.log(props);

					// drawer已关闭
					if (!props.open) console.log('Drawer closed - props.open');

					return <Button onClick={() => props.showDrawer()}>打开drawer</Button>;
				}}>
				<div>弹出的内容</div>
			</Drawer>
		</ConfigProvider>
	);
}
