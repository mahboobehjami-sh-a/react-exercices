// برای دیفالت ها میتوان نام دیگری هم اختصاص داد چون فقط یکی از آن وجود دارد اما برای named ها باید حتما عینا همان نام استفاده شود.
import START_DATE_default,{sessionNumber as SN , COURSE_NAME} from "./tutorial/modules/my-module"
import * as myModule from "./tutorial/modules/my-module"

function App() {
  return (
    <div >
      <h2>
       Start date : {myModule.default}
      </h2>
      <p>
      Course name : {myModule.COURSE_NAME}
      </p>
      <p>
      Session number : {myModule.sessionNumber}
      </p>
      <hr/>
      <h2>
       Start date : {START_DATE_default}
      </h2>
      <p>
      Course name : {COURSE_NAME}
      </p>
      <p>
      Session number : {SN}
      </p>
      <hr/>
      <p>Teacher : {myModule.showTeacherInfo()}</p>
      <p>Course Name : {myModule.course.name}</p>
    </div>
  );
}

export default App;
