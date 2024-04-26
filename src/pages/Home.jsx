import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, List, ListItem, useToast, VStack } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function Home() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch("https://mnwefvnykbgyhbdzpleh.supabase.co/api/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg",
          Authorization: "Bearer anonymous",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setNotes(data);
      } else {
        throw new Error("Failed to fetch notes");
      }
    } catch (error) {
      toast({
        title: "Error fetching notes",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleAddNote = async () => {};

  const handleUpdateNote = async (id) => {};

  const handleDeleteNote = async (id) => {};

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Add a new note</FormLabel>
          <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter note" />
          <Button leftIcon={<FaPlus />} mt={2} colorScheme="teal" onClick={handleAddNote}>
            Add Note
          </Button>
        </FormControl>
        <List spacing={3}>
          {notes.map((note) => (
            <ListItem key={note.id} d="flex" justifyContent="space-between" alignItems="center">
              {note.note}
              <Box>
                <Button size="sm" leftIcon={<FaEdit />} colorScheme="yellow" onClick={() => handleUpdateNote(note.id)}>
                  Edit
                </Button>
                <Button size="sm" leftIcon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteNote(note.id)}>
                  Delete
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
}

export default Home;
