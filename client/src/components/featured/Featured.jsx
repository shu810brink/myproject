import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  

  return (
    <div className='card'>
        <div className='card-header'>
          <h3 className='card-title'>Create alert </h3>
        </div>
        <div className='card-body'>
         
           <form>
            <div class="mb-3">
            
             <input type="text" class="form-control" id="fullname" placeholder="fullname"/>
            </div>
            <div class="mb-3">
             <label for="password" class="form-label">Criteria</label><br/>

            <input type='checkbox' /> Greater Than
            <input type='checkbox' /> less than
            </div><br/>
            <div>
              <input  type='number' placeholder="value" name='value'/>
            </div>
            <div>
              <select >
                <option value="Everday">Everday</option>
                <option value="Sun">Sun</option>
                <option value="Mon">Mon</option>
                <option value="Tue">Thu</option>
                <option value="Wed">Wed</option>
                <option value="Thu">Thu</option>
                <option value="Fri">Fri</option>

                <option value="Sat">Sat</option>
              
              </select>
            </div>
            <div>
            <label for="password" class="form-label">Criteria</label><br/>
            <select >
                <option value="DK-1">DK-1</option>
                <option value="DK-2">DK-2</option>
                <option value="DK-gas">DK-gas</option>
                
              
              </select>


            </div><br/>
            <div>
              <input Type='email' name='email' placeholder='email' />
            </div>
            <div>
              <input Type='number' name='mobile' placeholder='mobile' />
            </div>
           </form>
        </div>
      </div>
  );
};

export default Featured;
