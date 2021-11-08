from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from django.db import models

class MyUserManager(BaseUserManager):
    def create_user(self,email,username,first_name,last_name,password=None,middle_name=None,DOB=None):
        if not email:
            raise ValueError("Users Must Provide a Unique Email")
        if not username:
            raise ValueError("Users Must Provide a Unique Username")
        if not (first_name and last_name):
            raise ValueError("Users Must Provide a First Name And Last Name")
        user = self.model(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name=last_name,
            middle_name=middle_name,
            DOB=DOB
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self,email,username,first_name,last_name,password):
        user = self.create_user(
            email = self.normalize_email(email),
            username = username,
            password=password,
            first_name = first_name,
            last_name=last_name
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    username = models.CharField(max_length=26,unique=True)
    first_name = models.CharField(max_length=26)
    middle_name = models.CharField(max_length=26,null=True,default=None)
    last_name = models.CharField(max_length=26)
    email =models.EmailField(verbose_name="User Email id",max_length=60,unique=True)
    DOB = models.DateField(null=True,default=None)
    date_created = models.DateTimeField(auto_now_add=True,verbose_name="Date user was Created")
    last_login=models.DateTimeField(auto_now=True,verbose_name="Date user last login")
    is_admin=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    friends = models.ManyToManyField("Auth.User", verbose_name="User's Friends")

    objects = MyUserManager()
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS=['email','first_name','last_name']


    def __str__(self) -> str:
        return self.username

    def has_perm(self,param,object=None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True

    def get_fullname(request):
        res=request.first_name+" "
        if(request.middle_name):
            res+=request.middle_name+" "
        return res+request.last_name
    
