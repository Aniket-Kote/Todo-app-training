package com.askncapture.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.askncapture.todo.model.ToDo;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long>{

	
	public List<ToDo> findBytodone(int todo_done);
}
