document.getElementById("loadBtn").addEventListener("click", loadSchedules('zahr.json'))

function loadSchedules(fileName) {
    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            const classSchedule = document.getElementById("classSchedule");
            classSchedule.innerHTML = "";
            data.forEach(subject => {
                const cardHTML = `
                <div class="col-12 col-md-6 col-lg-4">
      <div class="card shadow-sm h-100">
        <div class="card-body">
        <h5 class="card-title">${subject.className}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${subject.teacher}</h6>
        <p><strong>Hobbies:</strong><br>${subject.roomNumber}</p>
        <p><strong>Email:</strong> ${subject.teacher}</p>
        <p><strong>Instagram:</strong> ${subject.subjectArea}</p>
        </div>
      </div>
      </div>


                             
                `
                classSchedule.innerHTML += cardHTML;
            })
        })




}
