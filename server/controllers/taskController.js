import tasks from '../data/tasks.js';

const getTasks = (req, res) => {
    try {
        //Hent query parametre
        const page = parseInt(req.query.page) || 1;
        const tasksPerPage = parseInt(req.query.tasksPerPage) || 10;
        const taskStatus = req.query.status;
        const alphabeticSort = req.query.alphabeticSort;
        const taskPrice = req.query.price;
    
        /*Opret en kopi af den originale liste af data, som kan filtreres og sorteres.
        Dette sikrer, at det oprindelige tasks array ikke ændres direkte, og at vi
        arbejder med en ren kopi af data, som kan ændres baseret på brugerens kriterier. */
        let filteredTasks = tasks;
        
        //Filtrer opgaver efter status
        if (taskStatus) {
            filteredTasks = filteredTasks.filter(task => task.status === taskStatus);
        }
    
        //Sorter opgaver alfabetisk
        if (alphabeticSort === "asc") {
            filteredTasks.sort((a, b) => a.title.localeCompare(b.title));
        } else if (alphabeticSort === "desc") {
            filteredTasks.sort((a, b) => b.title.localeCompare(a.title));
        }
    
        //Sorter opgaver efter pris
        if (taskPrice === "asc") {
            filteredTasks.sort((a, b) => a.price - b.price);
        } else if (taskPrice === "desc") {
            filteredTasks.sort((a, b) => b.price - a.price);
        }
    
        //Beregn pagination index
        const startIndex = (page - 1) * tasksPerPage;
        const endIndex = page * tasksPerPage;
    
        //Bruger slice metoden til at begrænse hvilke tasks der vises ud fra start of slut index
        const paginatedTasks = filteredTasks.slice(startIndex, endIndex);
    
        //Sender et response med paginerede opgaver og total antal sider
        res.json({ 
            tasks: paginatedTasks,
            totalPages: Math.ceil(filteredTasks.length / tasksPerPage)
        });
    } catch (error) {
        //Fejlhåndtering
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default getTasks;
