package com.askncapture.todo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.askncapture.todo.exception.ResourceNotFoundException;
import com.askncapture.todo.model.ToDo;
import com.askncapture.todo.repository.ToDoRepository;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "*")
public class ToDoController {

	@Autowired
	private ToDoRepository todorepo;

//	@GetMapping("/home")
//	public String home() {
//		return "Welcome";
//	}

//	get all todos
	@GetMapping("/todos")
	public List<ToDo> getallTodo() {
		return todorepo.findAll();
	}

//	create
	@PostMapping("/todos")
	public ToDo createTodo(@RequestBody ToDo todo) {
		return todorepo.save(todo);
	}

//	get todo by id
	@GetMapping("/todos/{todo_id}")
	public ResponseEntity<ToDo> getTodoById(@PathVariable Long todo_id) {
		ToDo todo = todorepo.findById(todo_id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Does Not exists with id : " + todo_id));
		return ResponseEntity.ok(todo);
	}

//	update todo
	@PutMapping("/todos/{todo_id}")
	public ResponseEntity<ToDo> updateTodo(@PathVariable Long todo_id,@RequestBody ToDo todoDetails) {
		ToDo todo = todorepo.findById(todo_id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Does Not exists with id : " + todo_id));

		todo.setTodo_title(todoDetails.getTodo_title());
		todo.setTodo_desc(todoDetails.getTodo_desc());
		System.out.println(todoDetails.getTodo_desc());
		return ResponseEntity.ok(todorepo.save(todo));
//		return ResponseEntity.ok(updatedTodo);
	}

//	delete entry
	@DeleteMapping("/todos/{todo_id}")
	public ResponseEntity<Map<String, Boolean>> deleteTodo(@PathVariable Long todo_id) {
		ToDo todo = todorepo.findById(todo_id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Does Not exists with id : " + todo_id));
		
		todorepo.delete(todo);
		Map<String, Boolean> response=new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
//	done todo
	@PutMapping("/todos/done/{todo_id}")
	public ResponseEntity<ToDo> doneTodo(@PathVariable Long todo_id, ToDo todoDetails) {
		ToDo todo = todorepo.findById(todo_id)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Does Not exists with id : " + todo_id));

		todo.setTodo_done(1);
		
		return ResponseEntity.ok(todorepo.save(todo));
//		return ResponseEntity.ok(updatedTodo);
	}
	
	
//	show all done
	@GetMapping("/todos/done/{todo_done}")
	public ResponseEntity<List<ToDo>> getDoneTodo(@PathVariable int todo_done) {
		
		return ResponseEntity.ok( todorepo.findBytodone(todo_done));
	}
	
}
