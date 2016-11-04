import React, {Component,PropTypes} from "react";
import style from "./JTable.css";

class JTable extends Component{
	render(){
		return <div>
			<table className={style.test}>
				<tbody>
					<tr>
						<td className={style.td}>This is a dummy table</td>
						<td className={style.td}>This is a dummy table</td>
						<td className={style.td}>This is a dummy table</td>
						<td className={style.td}>This is a dummy table</td>
					</tr>
				</tbody>
			</table>
		</div>
	}
}

export default JTable;