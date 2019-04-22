from rest_framework import routers

from .viewsets import ArtefactoViewSet, EntidadViewSet

router = routers.SimpleRouter()
router.register('artefactos',ArtefactoViewSet)
router.register('entidades',EntidadViewSet)

urlpatterns = router.urls
