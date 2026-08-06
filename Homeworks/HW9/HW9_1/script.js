coursesArray.forEach(course => {
    let card = document.createElement('div');
    card.className = 'course-card';

    let titleBlock = document.createElement('div');
    titleBlock.className = 'title-block';
    titleBlock.innerText = course.title;

    let durationBlock = document.createElement('div');
    durationBlock.className = 'duration-block';

    let monthBlock = document.createElement('div');
    monthBlock.className = 'month-block';
    monthBlock.innerText = `Month duration: ${course.monthDuration}`;

    let hourBlock = document.createElement('div');
    hourBlock.className = 'hour-block';
    hourBlock.innerText = `Hour duration: ${course.hourDuration}`;

    let modulesBlock = document.createElement('div');
    modulesBlock.className = 'modules-block';

    let ul = document.createElement('ul');
    ul.className = 'modules-list';
    course.modules.forEach(moduleText => {
        let li = document.createElement('li');
        li.className = 'module-item';
        li.innerText = moduleText;
        ul.append(li);
    });

    modulesBlock.append(ul);
    durationBlock.append(monthBlock, hourBlock);
    card.append(titleBlock, durationBlock, modulesBlock);
    document.body.append(card);
});