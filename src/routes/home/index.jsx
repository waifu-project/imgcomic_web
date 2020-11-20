import * as preact from "preact"
import { GetImage } from "../../utils"
import style from "./style.css"
import imgcomic from "imgcomic"

class Home extends preact.Component {

	constructor(props) {
		super(props)
		this.canvas = preact.createRef();
	}

	state = {
		url: "",
		old_url: "",
	}

	onSubmit = () => {
		const url = this.state.url
		const _url = url.trim()
		if (!_url.length || url == this.state.old_url) return
		GetImage(url)
			.then(res => {
				const canvas = this.canvas.current
				imgcomic.Render(canvas, res)
				this.setState({
					old_url: url
				})
			})
	}

	handleChange = (event)=> {
		const url = event.target.value
		this.setState({
			url
		})
	}

	render() {
		return (
			<div class={style.home}>
				<p><strong style="color: pink"># </strong>粘贴图片`url`地址即可</p>
				<input value={this.state.url} onChange={this.handleChange} />
				<button style="margin-left: 20px" onClick={this.onSubmit}>转换</button>
				<br />
				<br />
				<div style={{
					// width: `80%vw`,
					height: `320px`,
					overflow: `auto`
				}}>
					<canvas ref={this.canvas} />
				</div>
			</div>
		)
	}
}

export default Home;
