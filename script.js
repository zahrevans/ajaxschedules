const scheduleNames = {
    Zahr: "Zahr.json",
    Alexa: "Alexa.json",
    Michael: "Michael.json",
    Jason: "Jason.json"
}

document.getElementById("loadBtn").addEventListener("click", () => { loadSchedules(scheduleNames.Zahr); });


function loadSchedules(fileName) {
  fetch(fileName)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${fileName}: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data)) {
        console.error("Expected an array but got:", data);
        return;
      }

      const classSchedule = document.getElementById("classSchedule");
      classSchedule.innerHTML = "";

      data.forEach(subject => {
        const cardHTML = `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <h5 class="card-title">${subject.className}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${subject.teacher}</h6>
                <p><strong>Room:</strong> ${subject.roomNumber}</p>
                <p><strong>Email:</strong> ${subject.email ?? "N/A"}</p>
                <p><strong>Subject Area:</strong> ${subject.subjectArea}</p>
              </div>
            </div>
          </div>
        `;
        classSchedule.innerHTML += cardHTML;
      });
    })
    .catch(error => {
      console.error("Error loading schedule:", error);
      const classSchedule = document.getElementById("classSchedule");
      classSchedule.innerHTML = `<p class="text-danger">Could not load schedule. Check console for details.</p>`;
    });
}