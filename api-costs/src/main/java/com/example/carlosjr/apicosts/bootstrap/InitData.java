package com.example.carlosjr.apicosts.bootstrap;

import com.example.carlosjr.apicosts.categories.Category;
import com.example.carlosjr.apicosts.categories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class InitData implements CommandLineRunner {
    private final CategoryRepository categoryRepository;
    @Override
    public void run(String... args) throws Exception {

        if (categoryRepository.count() == 0){

            Category c1 = Category.builder().name("Design").build();
            Category c2 = Category.builder().name("Project").build();
            Category c3 = Category.builder().name("Software").build();
            Category c4 = Category.builder().name("Construction").build();
            Category c5 = Category.builder().name("Mobile").build();

            categoryRepository.saveAll(Arrays.asList(c1,c2,c3,c4,c5));

        }


    }
}
