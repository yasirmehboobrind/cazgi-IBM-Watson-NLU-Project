import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {Object.entries(this.props.emotions).map(function (mapentry) {
                return (
                    <tr key={mapentry[0]}> {/* You should include a key prop for each mapped element */}
                    <td>{mapentry[0]}</td>
                    <td>{mapentry[1]}</td>
                    </tr>
                    )
            })}
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;